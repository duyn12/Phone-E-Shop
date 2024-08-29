using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Server.Models.Configurations;
using Server.Models.Entities;

namespace Server.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser, IdentityRole<int>, int>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        //public virtual DbSet<AppSetting> AppSettings { get; set; }
        //public virtual DbSet<AuditLog> AuditLogs { get; set; }
        ////public virtual DbSet<User> Users { get; set; }
        ////public virtual DbSet<Role> Roles { get; set; }
        ////public virtual DbSet<UserToken> UserTokens { get; set; }
        ////public virtual DbSet<UserToken> UserTokens { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            //builder.Entity<AppSetting>(entity =>
            //{
            //    entity.HasKey(e => e.Id).HasName("PK__AppSetti__3214EC07615C8EF3");

            //    entity.Property(e => e.Id).ValueGeneratedNever();
            //});

            //builder.Entity<AuditLog>(entity =>
            //{
            //    entity.HasKey(e => e.Id).HasName("PK__AuditLog__3214EC0714B0520B");
            //});

            //builder.Entity<Role>(entity =>
            //{
            //    entity.HasKey(e => e.Id).HasName("PK__Roles__3214EC072C5DDEBD");

            //    entity.HasData(
            //        new Role
            //        {
            //            Id = 1,
            //            Title = "SuperAdmin",
            //            Description = "Administrator role with full permissions",
            //            Permissions = "Sales.SaleList,Sales.SaleAdd,Sales.SaleEdit,Sales.SaleDelete,Sales.SaleReceiveDue,Sales.SaleSendInvoice,Sales.SaleReturnList,Sales.SaleReturnAdd,Sales.SaleReturnDelete,Sales.Coupons,Sales.GiftCards,Quotations.QuotationList,Quotations.QuotationAdd,Quotations.QuotationEdit,Quotations.QuotationDelete,Purchases.PurchaseList,Purchases.PurchaseAdd,Purchases.PurchaseEdit,Purchases.PurchaseDelete,Purchases.PurchasePayDue,Purchases.PurchaseSendInvoice,Purchases.PurchaseReturnList,Purchases.PurchaseReturnAdd,Purchases.PurchaseReturnDelete,Inventory.ProductList,Inventory.ProductAdd,Inventory.ProductEdit,Inventory.ProductDelete,Inventory.Categories,Inventory.Brands,Inventory.Units,Inventory.Variations,Inventory.PrintBarcode,Inventory.StockAdjustmentList,Inventory.StockAdjustmentAdd,Inventory.StockAdjustmentEdit,Inventory.StockAdjustmentDelete,Inventory.StockTransferList,Inventory.StockTransferAdd,Inventory.StockTransferEdit,Inventory.StockTransferDelete,People.CustomerList,People.CustomerAdd,People.CustomerEdit,People.CustomerView,People.CustomerDelete,People.SupplierList,People.SupplierAdd,People.SupplierEdit,People.SupplierView,People.SupplierDelete,People.UserList,People.UserAdd,People.UserEdit,People.UserView,People.UserDelete,HRM.Companies,HRM.Departments,HRM.Designations,HRM.OfficeShifts,HRM.EmployeeList,HRM.EmployeeAdd,HRM.EmployeeEdit,HRM.EmployeeDelete,HRM.EmployeePayroll,HRM.EmployeeAttachments,HRM.Payroll,HRM.Attendance,HRM.LeaveRequests,HRM.Holidays,Accounting.Accounts,Accounting.Deposits,Accounting.Transfers,Accounting.Expenses,Accounting.Transactions,Home,Dashboard,Reports,Utilities.DatabaseBackup,Utilities.AuditLogs,Settings.AppSetting,Settings.Roles,Settings.Templates,Settings.Warehouses,Settings.TaxRates,Settings.Languages,Settings.PaymentMethods",
            //            DefaultHome = "Dashboard",
            //            UpdatedBy = "superadmin",
            //            UpdatedAt = DateTime.UtcNow
            //        });
            //});

            //builder.Entity<User>(entity =>
            //{
            //    entity.HasKey(e => e.Id).HasName("PK__Users__3214EC078A130F20");

            //    entity.HasOne(d => d.Role).WithMany(p => p.Users)
            //        .OnDelete(DeleteBehavior.ClientSetNull)
            //        .HasConstraintName("FK_Users_Roles");
            //});

            //builder.Entity<UserToken>(entity =>
            //{
            //    entity.HasKey(e => e.Id).HasName("PK__UserToke__3214EC07DDABF4E5");

            //    entity.HasOne(d => d.User).WithMany(p => p.UserTokens).HasConstraintName("FK_UserTokens_Users");
            //});

            base.OnModelCreating(builder);
            builder.ApplyConfiguration(new ApplicationUserConfiguration());
        }
    }
}
